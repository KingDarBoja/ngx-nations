import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { NgxNationsCoreService } from '../core.service';
import { NgxNationLocale } from '../types';

@Pipe({
  name: 'nationName',
})
export class NationNamePipe implements PipeTransform {
  constructor(private nations: NgxNationsCoreService) {}

  transform(value: string, lang?: NgxNationLocale, alternative?: number): string {
    const names = this.nations.getName(value, lang);
    return Array.isArray(names)
      ? alternative
        ? names[alternative]
        : names[0]
      : names;
  }
}


@NgModule({
  declarations: [NationNamePipe],
  exports: [NationNamePipe]
})
export class NationNamePipeModule {}
