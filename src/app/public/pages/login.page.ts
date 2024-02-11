import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {ArtheraService} from "../../shared/service/arthera.service";
import {ContractService} from "../../shared/service/contract.service";
import {lastValueFrom} from "rxjs";
import {formatHexToBN, formatHexToInt} from "../../shared/util/conversion";
import {commify, formatEther} from "@ethersproject/units";
import {formatDate} from "@angular/common";
import {ValidatorStake} from "../../shared/model/validator";

@Component({
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage implements OnInit {
  loading = false;
  lastValidatorID: number = 0;
  validators: any[] = [];

  constructor(
    private router: Router,
    private artheraService: ArtheraService,
    private contractService: ContractService,
  ) {
  }

  async ngOnInit() {
    this.contractService.loadSystemContracts();
    this.lastValidatorID = +(await this.contractService.getLastValidatorID());
    const data = await lastValueFrom(this.artheraService.fetchValidators());
    this.validators = data.map((v: ValidatorStake) => {
      return {
        id: formatHexToInt(v.id),
        createdTime: formatHexToInt(v.createdTime) > 0 ? formatDate(formatHexToInt(v.createdTime) * 1000, 'dd MMM yy HH:mm:ss', 'en') : '-',
        createdEpoch: formatHexToInt(v.createdEpoch),
        validatorAddress: v.validatorAddress,
        totalStake: commify(formatEther(formatHexToBN(v.totalStake))),
        stake: commify(formatEther(formatHexToBN(v.stake))),
        artheraStake: commify(formatEther(formatHexToBN(v.artheraStake))),
        artheraStakeBN: formatHexToBN(v.artheraStake),
        delegatedMe: commify(formatEther(formatHexToBN(v.delegatedMe))),
        isActive: Boolean(v.isActive),
        isWithdrawn: Boolean(v.isWithdrawn),
        isCheater: Boolean(v.isCheater),
        isOffline: Boolean(v.isOffline),
        isStakeLocked: Boolean(v.isStakeLocked),
        lockedFromEpoch: formatHexToInt(v.lockedFromEpoch),
        lockedUntil: formatHexToInt(v.lockedUntil) > 0 ? formatDate(formatHexToInt(v.lockedUntil) * 1000, 'dd MMM yy HH:mm:ss', 'en') : '-',
        deactivatedEpoch: formatHexToInt(v.lockedUntil),
        deactivatedTime: formatHexToInt(v.deactivatedTime) > 0 ? formatDate(formatHexToInt(v.deactivatedTime) * 1000, 'dd MMM yy HH:mm:ss', 'en') : '-',
        missedBlocks: formatHexToInt(v.missedBlocks),
        downtime: Math.round(formatHexToInt(v.downtime) / Math.pow(10, 9) / 60),
      }
    });
  }
}
