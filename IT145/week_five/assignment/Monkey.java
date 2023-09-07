public class Monkey extends RescueAnimal {
  // Instance variables
  public String species;

  // default constructor
  public Monkey() {
  }

  // accessors and mutators
  public String getSpecies() {
    return this.species;
  }

  public void setSpecies(String species) {
    this.species = species;
  }

  public int getLength() {
    return this.length;
  }

  public void setLength(int length) {
    this.length = length;
  }

  public int getHeight() {
    return this.height;
  }

  public void setHeight(int height) {
    this.height = height;
  }

  public int getBodyLength() {
    return this.bodyLength;
  }

  public void setBodyLength(int bodyLength) {
    this.bodyLength = bodyLength;
  }

  public int getTorso() {
    return this.torso;
  }

  public void setTorso(int torso) {
    this.torso = torso;
  }

  public int getSkull() {
    return this.skull;
  }

  public void setSkull(int skull) {
    this.skull = skull;
  }

  public int getNeck() {
    return this.neck;
  }

  public void setNeck(int neck) {
    this.neck = neck;
  }

  public Monkey species(String species) {
    this.species = species;
    return this;
  }

  public Monkey length(int length) {
    this.length = length;
    return this;
  }

  public Monkey height(int height) {
    this.height = height;
    return this;
  }

  public Monkey bodyLength(int bodyLength) {
    this.bodyLength = bodyLength;
    return this;
  }

  public Monkey torso(int torso) {
    this.torso = torso;
    return this;
  }

  public Monkey skull(int skull) {
    this.skull = skull;
    return this;
  }

  public Monkey neck(int neck) {
    this.neck = neck;
    return this;
  }

  // tostring
  @Override
  public String toString() {
    return "{" +
      " species='" + getSpecies() + "'" +
      ", length='" + getLength() + "'" +
      ", height='" + getHeight() + "'" +
      ", bodyLength='" + getBodyLength() + "'" +
      ", torso='" + getTorso() + "'" +
      ", skull='" + getSkull() + "'" +
      ", neck='" + getNeck() + "'" +
      "}";
  }

}
