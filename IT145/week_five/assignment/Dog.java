
public class Dog extends RescueAnimal {

    // Instance variables
    public String breed;

    public Dog() {
    }

    // Accessor Method
    public String getBreed() {
        return this.breed;
    }

    public Dog breed(String breed) {
        this.breed = breed;
        return this;
    }

    // Mutator Methods
    public void setBreed(String breed) {
        this.breed = breed;
    }
}
