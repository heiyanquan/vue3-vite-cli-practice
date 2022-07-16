declare interface AMapLoaderInfor {
  load: Function;
}

declare interface Window {
  AMapLoader: AMapLoaderInfor;
  AMap: object;
  $message: any;
  $loading: any;
}
