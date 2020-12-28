import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Pipe({
  name: 'sanitize'
})
export class SanitizePipe implements PipeTransform {

  constructor(private sanitize: DomSanitizer) {
  }
  transform(url: string): SafeResourceUrl {
    return this.sanitize.bypassSecurityTrustResourceUrl(url);
  }

}
