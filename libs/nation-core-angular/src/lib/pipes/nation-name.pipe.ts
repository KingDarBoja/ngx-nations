import {
  ChangeDetectorRef,
  NgModule,
  OnDestroy,
  Pipe,
  PipeTransform,
} from '@angular/core';
import { getName } from '@nation/i18n';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NgxNationsCoreService } from '../core.service';
import { NationLocale } from '../types';

@Pipe({
  name: 'nationName',
  pure: false,
})
export class NationNamePipe implements PipeTransform, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private readonly config: NgxNationsCoreService,
    private readonly cd: ChangeDetectorRef,
  ) {
    this.config.locale$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.cd.markForCheck());
  }

  transform(
    value: string,
    locale?: NationLocale,
    alternative?: number,
  ): string {
    const names = getName(value, locale ?? this.config.locale());
    return Array.isArray(names)
      ? alternative
        ? names[alternative]
        : names[0]
      : names;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}

@NgModule({
  declarations: [NationNamePipe],
  exports: [NationNamePipe],
})
export class NationNamePipeModule {}
