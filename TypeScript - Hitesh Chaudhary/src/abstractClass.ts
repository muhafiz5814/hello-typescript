abstract class TakePhoto {

  public abstract burst: number;
  constructor(
    public cameraMode: string,
    public filter: string
  ) {
  }

  abstract getFilter(): string;
}

// let photo = new TakePhoto("front", "black-white"); /* Not allowed to create instance or object of abstract class.*/

class Facebook extends TakePhoto {
  constructor(cameraMode: string, filter: string) {
    super(cameraMode, filter);
  }
  burst = 4;
  getFilter(): string {
    return this.filter;
  }
}