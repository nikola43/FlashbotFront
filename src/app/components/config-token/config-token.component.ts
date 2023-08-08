import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationUtils, SnackBarColorEnum } from '../../../utils/NotificationUtil';
import { Web3Service } from '../../services/web3.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreateTokenDialogComponent } from '../create-token-dialog/create-token-dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as actions from 'src/app/store/actions';
import { Observable, of, Subject } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';

declare let require: any;
const Web3 = require('web3');

@Component({
  selector: 'app-config-token',
  templateUrl: './config-token.component.html',
  styleUrls: ['./config-token.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigTokenComponent implements OnInit, OnDestroy {
  tokenInfo = {
    name: '',
    symbol: '',
    supply: '',
    owner: 0
  }
  networks: any;
  valuesPercent = {
    buyFee: 0,
    sellFee: 0,
    transferFee: 0,
    TxFeePercentToLP: 0
  };
  createdTokenAddress = '';
  networkId = 0;
  formGroup: FormGroup;
  tokenAddressInputFormGroup: FormGroup;
  createButtonLabel = 'Create Token';
  addToMetamaskButtonLabel = 'Add token to metamask';
  tokenAddedToMetamask = false;
  isLoading = false;
  isLoadingGas = false;
  isLoadingDelay = false;
  isLoadingMaxBuy = false;
  isLoadingAutoInject = false;
  isLoadingSetRouter = false;
  isLoadingSetPair = false;
  isLoadingNewMarketing = false;
  isLoadingTxFeePercentToWallet = false;
  isLoadingNewOwner = false;
  isLoadingNoOwner = false;
  isLoadingBusdAddress = false;
  isLoadingExcludeFromFees = false;
  isLoadingLiquidityAddress = false;
  tokenBalance: any;
  hasError = false;
  account: any = undefined;
  validTokenAddress = false;
  showCustomGeneralSettings = true;
  showCustomWhaleFeeSettings = true;
  showCustomBuySellTransferSettings = true;
  showCustomGasPriceLimitSettings = true;
  showCustomOwnerSettings = true;
  transferToPoolsOnSwaps = true;
  showCustomDelayTxSettings = true;
  showCustomAntibotSettings = true;
  showCustomBuybackSettings = true;
  showCustomAutoInjectSettings = true;
  showCustomCharitySettings = true;

  isTaxesPercentLoading = false;
  isGasPriceLoading = false;
  isDelayTxLoading = false;
  isDelayLaunchLoading = false;
  isEnableTradingLoading = false;
  isBuybackTaxLoading = false;
  isBuyBackTresLoading = false;
  isBuyBackThresLoading = false;
  isAutoLiquidityLoading = false;
  isMaxWalletLoading = false;
  isCharityFeeLoading = false;
  isCharityWalletLoading = false;

  bnbBalance$: Observable<number>;
  selectedPayToken: {
    id: number;
    address: string;
  };
  creating = false;
  routerAddress: string;

  isApproving = false;
  @ViewChild('tokenAddress') tokenAddress!: ElementRef<HTMLElement>;

  private _unsubscribeAll: Subject<any> = new Subject<any>();
  account$: Observable<string>;
  constructor(
    public web3Service: Web3Service,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private notificationUtils: NotificationUtils,
    public dialog: MatDialog,
    private store: Store<AppState>
  ) {
    this.networks = this.web3Service.network;
    this.createForm();

    this.store.dispatch(actions.web3Connect());
    this.account$ = this.store.select('web3').pipe(
      map((d) => d),
      switchMap((d) => of(d.account))
    );
    if (this.web3Service.enable) {

      this.web3Service
        .getAccount()
        .then(async (r) => {
          this.account = r;
          this.selectedPayToken = {
            id: 0,
            address: await this.web3Service.getWethAddress(),
          };
          this.bnbBalance$ = this.store.select('web3').pipe(
            map((d) => d),
            switchMap((d) => of(d.bnbBalance))
          );

          this.formGroup.controls.tokenDecimals.setValue('0');
          this.formGroup.controls.TxFeePercentToHolders.setValue('0');
          this.formGroup.controls.gasLimitActive.setValue('false');
          this.formGroup.controls['maxGasPriceLimit'].setValue('0');
          this.formGroup.controls.transferDelayEnabled.setValue('false');
          this.formGroup.controls.swapThreshold.setValue('0');
          this.formGroup.controls.buybackThreshold.setValue('0');
          this.formGroup.controls.tradingActive.setValue('false');
          this.formGroup.controls.transferToPoolsOnSwaps.setValue('false');
          this.formGroup.controls.timeDelayBetweenTx.setValue('0');
          this.formGroup.controls.totalDelayTime.setValue('0');
          this.formGroup.controls.maxBuyLimit.setValue('0');
          this.formGroup.controls.transferFee.setValue(0);
          this.formGroup.controls.sellFee.setValue(0);
          this.formGroup.controls.buyFee.setValue(0);
          this.formGroup.controls.TxFeePercentToWallet.setValue(0);
          this.formGroup.controls.contractSwapEnabled.setValue('false');
          this.formGroup.controls.TxFeePercentToLP.setValue('0');
          this.formGroup.controls.TxFeePercentToBurned.setValue('0');
          this.formGroup.controls.TxFeePercentToWallet.setValue('0');
          this.formGroup.controls.TxFeePercentToBuybackTokens.setValue('0');
          this.formGroup.controls.CharityWallet.setValue(this.account);
          this.formGroup.controls.TxFeePercentToCharity.setValue('0');
          this.formGroup.controls.MaxWalletAmount.setValue('0');
          this.formGroup.controls.busdAddress.setValue('');
          this.formGroup.controls.liquidityAddress.setValue('');
          this.formGroup.controls.routeAddress.setValue('');
          this.formGroup.controls.pairAddress.setValue('');
          this.formGroup.controls.newOwner.setValue('');
          this.formGroup.controls.excludeFromFeeAddress.setValue('');
          this.formGroup.controls.excludeFromFeeBool.setValue('false');
          this.formGroup.controls.busdBuyBurnAddress.setValue('');
          this.formGroup.controls.FeeReceiverWallet.setValue(this.account);
          this.routerAddress = this.web3Service.getRouterAddress();
        })
        .catch((err) => {
          console.log(err);
        });
    }

    if (this.web3Service.web3) {
      this.web3Service.web3.on('accountsChanged', (accounts: any) => {
        if (accounts.length === 0) {
          this.account = undefined;
          // this.buttonLabel = 'Connect';
        } else {
          this.account = accounts[0];
          // this.buttonLabel = accounts[0];
        }
      });

      this.web3Service.web3.on('networkChanged', (nID) => {
        this.web3Service.currentNetworkId.subscribe((nID) => {
          this.networkId = nID;
        });
      });
    }
  }

  ngOnInit(): void {
    this.loadContract();
  }

  loadContract() {
    this.store
      .select('web3')
      .pipe(
        takeUntil(this._unsubscribeAll),
        map((d) => {
          if (d && d.contract) {
            setTimeout(() => {
              this.formGroup.controls['tokenAddress'].setValue(d.contract.contractAddress)
              //this.tokenAddress.nativeElement.click()
              this.tokenAddress.nativeElement.dispatchEvent(new InputEvent('input'))
              this.onValidTokenCheckValues().then()
            }, 1000);
          }
        })
      )
      .subscribe();
  }

  // tslint:disable-next-line:typedef
  createForm() {
    this.formGroup = this.formBuilder.group({
      tokenAddress: [null, [Validators.required, Validators.pattern('^0x[a-fA-F0-9]{40}$')]],
      tokenDecimals: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(2)]],
      TxFeePercentToHolders: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(2)]],
      TxFeePercentToLP: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(2)]],
      TxFeePercentToBurned: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(2)]],
      TxFeePercentToWallet: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(2)]],
      TxFeePercentToBuybackTokens: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(3)]],
      MaxWalletAmount: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(18)]],

      gasLimitActive: ['false', [Validators.required, Validators.minLength(1), Validators.maxLength(5)]],
      maxGasPriceLimit: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(18)]],
      transferDelayEnabled: ['false', [Validators.required, Validators.minLength(1), Validators.maxLength(5)]],
      swapThreshold: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(18)]],
      buybackThreshold: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(18)]],
      tradingActive: ['false', [Validators.required, Validators.minLength(1), Validators.maxLength(5)]],
      transferToPoolsOnSwaps: ['false', [Validators.required, Validators.minLength(1), Validators.maxLength(5)]],
      timeDelayBetweenTx: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(4)]],
      totalDelayTime: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      maxBuyLimit: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(18)]],
      buyFee: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(3)]],
      sellFee: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(3)]],
      transferFee: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(3)]],
      busdAddress: [null, [Validators.required, Validators.pattern('^0x[a-fA-F0-9]{40}$')]],
      liquidityAddress: [null, [Validators.required, Validators.pattern('^0x[a-fA-F0-9]{40}$')]],
      routeAddress: [null, [Validators.required, Validators.pattern('^0x[a-fA-F0-9]{40}$')]],
      pairAddress: [null, [Validators.required, Validators.pattern('^0x[a-fA-F0-9]{40}$')]],
      newOwner: [null, [Validators.required, Validators.pattern('^0x[a-fA-F0-9]{40}$')]],
      excludeFromFeeAddress: [null, [Validators.required, Validators.pattern('^0x[a-fA-F0-9]{40}$')]],
      excludeFromFeeBool: ['false', [Validators.required, Validators.minLength(1), Validators.maxLength(5)]],
      busdBuyBurnAddress: [null, [Validators.required, Validators.pattern('^0x[a-fA-F0-9]{40}$')]],
      contractSwapEnabled: ['false', [Validators.required, Validators.minLength(1), Validators.maxLength(5)]],

      FeeReceiverWallet: [null, [Validators.required, Validators.pattern('^0x[a-fA-F0-9]{40}$')]],
      CharityWallet: [null, [Validators.required, Validators.pattern('^0x[a-fA-F0-9]{40}$')]],
      TxFeePercentToCharity: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(5)]],
      validate: '',
    });
  }
  // tslint:disable-next-line:typedef
  async numberFieldKeyup(event, maxValue, controlName) {
    console.log('event')
    if (this.formGroup.controls['tokenAddress'].valid) {
      this.validTokenAddress = true;
      this.onValidTokenCheckValues()
    } else {
      this.validTokenAddress = false;
    }
    if (!isNaN(event.key) || event.code === 'Backspace') {
      switch (controlName) {
        case 'buyFee':
          this.valuesPercent.buyFee = event.target.value / 100;
          break;
        case 'sellFee':
          this.valuesPercent.sellFee = event.target.value / 100;
          break;
        case 'transferFee':
          this.valuesPercent.transferFee = event.target.value / 100;
          break;
        default:
          break;
      }
    }
  }

  // tslint:disable-next-line:typedef
  async onValidTokenCheckValues() {
    const tokenAddress = this.formGroup.get('tokenAddress')?.value;
    await this.web3Service
      .getTokenValues(tokenAddress)
      .then((r) => {
        console.log('return values')
        console.log({ r })
        this.formGroup.controls.gasLimitActive.setValue(r.gasLimit);
        this.formGroup.controls.maxGasPriceLimit.setValue(r.priceLmt);
        this.formGroup.controls.transferDelayEnabled.setValue(r.delay);
        this.formGroup.controls.swapThreshold.setValue(r.swap);
        this.formGroup.controls.tradingActive.setValue(r.tradingE);
        this.formGroup.controls.timeDelayBetweenTx.setValue(r.delayBtw);
        this.formGroup.controls.totalDelayTime.setValue(r.totalDelayTime);
        this.formGroup.controls.maxBuyLimit.setValue(r.buyLmt);
        this.formGroup.controls.transferFee.setValue(r.feeR.transferFee);
        this.formGroup.controls.sellFee.setValue(r.feeR.sellFee);
        this.formGroup.controls.buyFee.setValue(r.feeR.buyFee);
        // this.formGroup.controls.contractSwapEnabled.setValue('false');
        // this.formGroup.controls.TxFeePercentToLP.setValue('0');
        // this.formGroup.controls.TxFeePercentToBurned.setValue('0');
        // this.formGroup.controls.TxFeePercentToWallet.setValue('0');
        //this.formGroup.controls.TxFeePercentToBuybackTokens.setValue('0');
        //this.formGroup.controls.CharityWallet.setValue(this.account);
        //this.formGroup.controls.TxFeePercentToCharity.setValue('0');
        this.formGroup.controls.MaxWalletAmount.setValue(r.maxWallet);
        //this.formGroup.controls.busdAddress.setValue('');
        this.formGroup.controls.liquidityAddress.setValue(r.lp);
        //this.formGroup.controls.routeAddress.setValue('');
        //this.formGroup.controls.pairAddress.setValue('');
        //this.formGroup.controls.newOwner.setValue('');
        //this.formGroup.controls.excludeFromFeeAddress.setValue('');
        //this.formGroup.controls.excludeFromFeeBool.setValue('false');
        //this.formGroup.controls.busdBuyBurnAddress.setValue('');
        //this.formGroup.controls.FeeReceiverWallet.setValue(this.account);
      })
      .catch((err) => {
        this.isLoadingDelay = false;
      });
  }

  // tslint:disable-next-line:typedef
  async getTokenBalance(tokenAddress) {
    return await this.web3Service.getTokensBalance(tokenAddress);
  }

  // tslint:disable-next-line:typedef
  async getTokenName(tokenAddress: any) {
    return await this.web3Service.getTokensName(tokenAddress);
  }

  //sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // tslint:disable-next-line:typedef
  onSwitchChangeShowCustomBuySellTransferSettings() {
    this.showCustomBuySellTransferSettings = !this.showCustomBuySellTransferSettings;
  }

  // tslint:disable-next-line:typedef
  onSwitchChangeShowCustomGeneralSettings() {
    this.showCustomGeneralSettings = !this.showCustomGeneralSettings;
  }

  // tslint:disable-next-line:typedef
  onSwitchChangeShowCustomOwnerSettings() {
    this.showCustomOwnerSettings = !this.showCustomOwnerSettings;
  }

  // tslint:disable-next-line:typedef
  onSwitchChangeGasPriceLimitSettings() {
    this.showCustomGasPriceLimitSettings = !this.showCustomGasPriceLimitSettings;
    //this.formGroup.controls.gasLimitActive.setValue(this.showCustomBuybackSettings);
  }

  // tslint:disable-next-line:typedef
  onSwitchDelayTxSettings() {
    this.showCustomDelayTxSettings = !this.showCustomDelayTxSettings;
    //this.formGroup.controls.transferDelayEnabled.setValue(this.showCustomBuybackSettings);
  }

  // tslint:disable-next-line:typedef
  onSwitchChange() {
    if (this.formGroup.get('tokenAddress').value) {
      this.validTokenAddress = !this.validTokenAddress;
    }
  }

  // tslint:disable-next-line:typedef
  onSwitchChangeWhaleTaxes() {
    this.showCustomWhaleFeeSettings = !this.showCustomWhaleFeeSettings;
  }

  // tslint:disable-next-line:typedef
  onSwitchChangeAntiBotSettings() {
    this.showCustomAntibotSettings = !this.showCustomAntibotSettings;
  }

  // tslint:disable-next-line:typedef
  onSwitchChangeAutoInjectSettings() {
    this.showCustomAutoInjectSettings = !this.showCustomAutoInjectSettings;
  }

  // tslint:disable-next-line:typedef
  onSwitchChangeBuybackSettings() {
    this.showCustomBuybackSettings = !this.showCustomBuybackSettings;
    //this.formGroup.controls.contractSwapEnabled.setValue(this.showCustomBuybackSettings);
  }

  // tslint:disable-next-line:typedef
  onSwitchChangeCharitySettings() {
    this.showCustomCharitySettings = !this.showCustomCharitySettings;
  }

  // tslint:disable-next-line:typedef
  async getTokenInfo(event: any, maxValue, controlName) {
    this.numberFieldKeydown(event, maxValue, controlName)
    if (this.web3Service.validateAddress(event.target.value)) {
      this.isLoading = true;
      this.validTokenAddress = true;
      this.tokenInfo.symbol = await this.web3Service.getTokensSymbol(event.target.value);
      this.tokenInfo.supply = await this.web3Service.getTokensSupply(event.target.value);
      this.tokenInfo.name = await this.web3Service.getTokensName(event.target.value);
    }
  }

  // tslint:disable-next-line:typedef
  async numberFieldKeydown(event, maxValue, controlName) {
    if (event.code !== 'Backspace') {
      console.log({ event });
      if (isNaN(Number(event.key))) {
        event.preventDefault();
        event.stopImmediatePropagation();
        return false;
      }

      if (Number(event.key) < 0 || Number(event.key) > 9) {
        event.preventDefault();
        event.stopImmediatePropagation();
        return false;
      }
    }
    if (this.formGroup.controls['tokenAddress'].valid) {
      this.onValidTokenCheckValues()
    }
  }

  async onClickEnableCustomGasPrice() {
    this.isLoadingGas = true;
    const tokenAddress = this.formGroup.get('tokenAddress')?.value;
    await this.web3Service
      .updateGasLimitActive(tokenAddress, Number(this.formGroup.get('gasLimitActive')))
      .then((r) => {
        if (r) {
          this.isLoadingGas = false;
        }
      })
      .catch((err) => {
        this.isLoadingGas = false;
        console.log(err);
      });
  }

  // tslint:disable-next-line:typedef
  async onClickEnableCustomAntiBotDelay() {
    this.isLoadingDelay = true;
    const tokenAddress = this.formGroup.get('tokenAddress')?.value;
    console.log(this.formGroup.get('transferDelayEnabled'))
    await this.web3Service
      .updateTransferDelayEnabled(tokenAddress, Number(this.formGroup.get('transferDelayEnabled')))
      .then((r) => {
        if (r) {
          this.isLoadingDelay = false;
        }
      })
      .catch((err) => {
        this.isLoadingDelay = false;
        console.log('error');
      });
  }

  // tslint:disable-next-line:typedef
  async onClickUpdateTransferPoolSwaps() {
    this.isLoadingDelay = true;
    const tokenAddress = this.formGroup.get('tokenAddress')?.value;
    await this.web3Service
      .updateTransferToPoolsOnSwaps(tokenAddress, this.showCustomDelayTxSettings)
      .then((r) => {
        if (r) {
          this.isLoadingDelay = false;
        }
      })
      .catch((err) => {
        this.isLoadingDelay = false;
        console.log('error');
      });
  }

  // tslint:disable-next-line:typedef
  async onClickEnableCustomAutoInject() {
    this.isLoadingAutoInject = true;
    const tokenAddress = this.formGroup.get('tokenAddress')?.value;
    await this.web3Service
      .updateContractSwapEnabled(tokenAddress, this.showCustomGasPriceLimitSettings)
      .then((r) => {
        if (r) {
          this.isLoadingAutoInject = false;
        }
      })
      .catch((err) => {
        this.isLoadingAutoInject = false;
        console.log(err);
      });
  }

  // tslint:disable-next-line:typedef
  async onClickSetBusdBuyBurnAddress() {
    this.isLoadingAutoInject = true;
    const tokenAddress = this.formGroup.get('tokenAddress')?.value;
    await this.web3Service
      .setBusdBuyBurnAddress(tokenAddress, this.showCustomGasPriceLimitSettings)
      .then((r) => {
        if (r) {
          this.isLoadingAutoInject = false;
        }
      })
      .catch((err) => {
        this.isLoadingAutoInject = false;
        console.log(err);
      });
  }

  // tslint:disable-next-line:typedef
  async onClickUpdateBusdAddress() {
    this.isLoadingBusdAddress = true;
    const tokenAddress = this.formGroup.get('tokenAddress')?.value;
    await this.web3Service
      .updateBUSDAddress(tokenAddress, this.formGroup.get('busdAddress')?.value)
      .then((r) => {
        if (r) {
          this.isLoadingBusdAddress = false;
        }
      })
      .catch((err) => {
        this.isLoadingBusdAddress = false;
        console.log(err);
      });
  }

  // tslint:disable-next-line:typedef
  async OnClickSetLiquidityAddress() {
    this.isLoadingLiquidityAddress = true;
    const tokenAddress = this.formGroup.get('tokenAddress')?.value;
    await this.web3Service
      .setLiquidityAddress(tokenAddress, this.formGroup.get('liquidityAddress')?.value)
      .then((r) => {
        if (r) {
          this.isLoadingLiquidityAddress = false;
        }
      })
      .catch((err) => {
        this.isLoadingLiquidityAddress = false;
        console.log(err);
      });
  }

  // tslint:disable-next-line:typedef
  async onClickExcludeFromFees() {
    this.isLoadingExcludeFromFees = true;
    const tokenAddress = this.formGroup.get('tokenAddress')?.value;
    await this.web3Service
      .excludeFromFee(tokenAddress, this.formGroup.get('excludeFromFeeAddress')?.value, Number(this.formGroup.get('excludeFromFeeBool')))
      .then((r) => {
        if (r) {
          this.isLoadingExcludeFromFees = false;
        }
      })
      .catch((err) => {
        console.log("error", err);
        this.isLoadingExcludeFromFees = false;
      });
    this.isLoadingExcludeFromFees = false;
  }

  // tslint:disable-next-line:typedef
  async onClickEnableCustomSetTaxes() {
    console.log('click');
    this.isTaxesPercentLoading = true;
    const tokenAddress = this.formGroup.get('tokenAddress')?.value;
    const taxesArray: any[] = [
      this.formGroup.get('buyFee')?.value * 100,
      this.formGroup.get('sellFee')?.value* 100,
      this.formGroup.get('transferFee')?.value* 100,
    ];
    await this.web3Service
      .setTaxes(tokenAddress, taxesArray)
      .then((r) => {
        if (r) {
          this.isTaxesPercentLoading = false;
        }
      })
      .catch((err) => {
        this.isTaxesPercentLoading = false;
        console.log(err);
      });
    this.isTaxesPercentLoading = false;
  }

  // tslint:disable-next-line:typedef
  async onClickGasPrice() {
    this.isGasPriceLoading = true;
    const tokenAddress = this.formGroup.get('tokenAddress')?.value;
    await this.web3Service
      .updateMaxGasPriceLimit(tokenAddress, this.formGroup.get('maxGasPriceLimit')?.value)
      .then((r) => {
        if (r) {
          this.isGasPriceLoading = false;
        }
      })
      .catch((err) => {
        this.isGasPriceLoading = false;
        console.log(err);
      });
  }

  // // tslint:disable-next-line:typedef
  // async onClickDelayTx() {
  //   this.isDelayTxLoading = true;
  //   const tokenAddress = this.formGroup.get('tokenAddress')?.value;
  //   await this.web3Service
  //     .setTimeDelayBetweenTx(tokenAddress, this.showCustomGasPriceLimitSettings)
  //     .then((r) => {
  //       if (r) {
  //         this.isDelayTxLoading = false;
  //       }
  //     })
  //     .catch((err) => {
  //       this.isDelayTxLoading = false;
  //       console.log(err);
  //     });
  // }

  // tslint:disable-next-line:typedef
  async onClickDelayLaunch() {
    this.isDelayLaunchLoading = true;
    const tokenAddress = this.formGroup.get('tokenAddress')?.value;
    await this.web3Service
      .setTotalDelayTime(tokenAddress, this.showCustomGasPriceLimitSettings)
      .then((r) => {
        if (r) {
          this.isDelayLaunchLoading = false;
        }
      })
      .catch((err) => {
        this.isDelayLaunchLoading = false;
        console.log(err);
      });
  }

  // tslint:disable-next-line:typedef
  async onClickSwapThreshold() {
    this.isBuybackTaxLoading = true;
    const tokenAddress = this.formGroup.get('tokenAddress')?.value;
    await this.web3Service
      .updateSwapThreshold(tokenAddress, this.formGroup.get('swapThreshold')?.value)
      .then((r) => {
        if (r) {
          this.isBuybackTaxLoading = false;
        }
      })
      .catch((err) => {
        this.isBuybackTaxLoading = false;
        console.log(err);
      });
  }

  // tslint:disable-next-line:typedef
  async onClickBuyBackFees() {
    this.isBuyBackTresLoading = true;
    const tokenAddress = this.formGroup.get('tokenAddress')?.value;
    
    await this.web3Service
      .setBuyBackPercent(tokenAddress, this.formGroup.get('TxFeePercentToBuybackTokens')?.value * 100)
      .then((r) => {
        if (r) {
          this.isBuyBackTresLoading = false;
        }
      })
      .catch((err) => {
        this.isBuyBackTresLoading = false;
        console.log(err);
      });
  }

  // tslint:disable-next-line:typedef
  async onClickBuybackThreshold() {
    this.isBuyBackThresLoading = true;
    const tokenAddress = this.formGroup.get('tokenAddress')?.value;
    await this.web3Service
      .setBuyBackThreshold(tokenAddress, this.formGroup.get('buybackThreshold')?.value)
      .then((r) => {
        if (r) {
          this.isBuyBackThresLoading = false;
        }
      })
      .catch((err) => {
        this.isBuyBackThresLoading = false;
        console.log(err);
      });
  }

  // tslint:disable-next-line:typedef
  async onClickAutoLiquidity() {
    this.isAutoLiquidityLoading = true;
    const tokenAddress = this.formGroup.get('tokenAddress')?.value;
    await this.web3Service
      .setAutoLiquidityPercent(tokenAddress, this.formGroup.get('TxFeePercentToLP')?.value *100)
      .then((r) => {
        if (r) {
          this.isAutoLiquidityLoading = false;
        }
      })
      .catch((err) => {
        this.isAutoLiquidityLoading = false;
        console.log(err);
      });
  }

  // tslint:disable-next-line:typedef
  async onClickMaxWallet() {
    this.isMaxWalletLoading = true;
    const tokenAddress = this.formGroup.get('tokenAddress')?.value;
    await this.web3Service
      .setMaxWalletAmount(tokenAddress, this.formGroup.get('MaxWalletAmount')?.value)
      .then((r) => {
        if (r) {
          this.isMaxWalletLoading = false;
        }
      })
      .catch((err) => {
        this.isMaxWalletLoading = false;
        console.log(err);
      });
  }

  // // tslint:disable-next-line:typedef
  async onClickMaxBuyLimit() {
    this.isLoadingMaxBuy = true;
    const tokenAddress = this.formGroup.get('tokenAddress')?.value;
    await this.web3Service
      .updateMaxBuyLimit(tokenAddress, this.formGroup.get('maxBuyLimit')?.value)
      .then((r) => {
        if (r) {
          this.isLoadingMaxBuy = false;
        }
      })
      .catch((err) => {
        this.isLoadingMaxBuy = false;
        console.log(err);
      });
  }

  // // tslint:disable-next-line:typedef
  async OnClickSetPairAddress() {
    this.isLoadingSetPair = true;
    const tokenAddress = this.formGroup.get('tokenAddress')?.value;
    await this.web3Service
      .setPairAddress(tokenAddress, this.formGroup.get('pairAddress')?.value)
      .then((r) => {
        if (r) {
          this.isLoadingSetPair = false;
        }
      })
      .catch((err) => {
        this.isLoadingSetPair = false;
        console.log(err);
      });
  }

  // // tslint:disable-next-line:typedef
  async OnClickNewOwner() {
    this.isLoadingNewOwner = true;
    const tokenAddress = this.formGroup.get('tokenAddress')?.value;
    await this.web3Service
      .transferOwner(tokenAddress, this.formGroup.get('newOwner')?.value)
      .then((r) => {
        if (r) {
          this.isLoadingNewOwner = false;
        }
      })
      .catch((err) => {
        this.isLoadingNewOwner = false;
        console.log(err);
      });
  }

  // // tslint:disable-next-line:typedef
  async onClickTxFeePercentToWallets() {
    this.isLoadingTxFeePercentToWallet = true;
    const tokenAddress = this.formGroup.get('tokenAddress')?.value;
    await this.web3Service
      .setW1AddressPercent(tokenAddress, this.formGroup.get('TxFeePercentToWallet')?.value * 100)
      .then((r) => {
        if (r) {
          this.isLoadingTxFeePercentToWallet = false
        }
      })
      .catch((err) => {
        this.isLoadingTxFeePercentToWallet = false;
        console.log(err);
      });
  }

  // // tslint:disable-next-line:typedef
  async OnClickNewMarketing() {
    this.isLoadingNewMarketing = true;
    const tokenAddress = this.formGroup.get('tokenAddress')?.value;
    await this.web3Service
      .setW1Address(tokenAddress, this.formGroup.get('FeeReceiverWallet')?.value)
      .then((r) => {
        if (r) {
          this.isLoadingNewMarketing = false
        }
      })
      .catch((err) => {
        this.isLoadingNewMarketing = false;
        console.log(err);
      });
  }

  // // tslint:disable-next-line:typedef
  async OnClickNoOwner() {
    this.isLoadingNoOwner = true;
    const tokenAddress = this.formGroup.get('tokenAddress')?.value;
    await this.web3Service
      .renounceOwnership(tokenAddress)
      .then((r) => {
        if (r) {
          this.isLoadingNoOwner = false;
        }
      })
      .catch((err) => {
        this.isLoadingNoOwner = false;
        console.log(err);
      });
  }

  // // tslint:disable-next-line:typedef
  async OnClickSetRouterAddress() {
    this.isLoadingSetRouter = true;
    const tokenAddress = this.formGroup.get('tokenAddress')?.value;
    await this.web3Service
      .setRouterAddress(tokenAddress, this.formGroup.get('routeAddress')?.value, this.formGroup.get('routeAddress')?.value)
      .then((r) => {
        if (r) {
          this.isLoadingSetRouter = false;
        }
      })
      .catch((err) => {
        this.isLoadingSetRouter = false;
        console.log(err);
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
