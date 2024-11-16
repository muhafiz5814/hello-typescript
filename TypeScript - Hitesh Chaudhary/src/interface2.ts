interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  photo: string;
  createStory(): string;
}

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
  }
}

class YouTube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    private shorts: string,
    public history: string,
    public photo: string
  ) {
  }

  createStory(): string {
    return this.photo;
  }
}