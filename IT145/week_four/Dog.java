public class Dog {

    // instance variables
	String type, breed, name, topTrick;

    // constructor
	public Dog(String type, String breed, String name, String topTrick) {
		type = type;
		breed = breed;
		name = name;
	}

    // methods
	public void setTopTrick(String trick) {
		topTrick = trick;
	}

    // method used to print Dog information
    public String toString() {
        String temp = "\nDOG DATA\n" + name + " is a " + breed +
                ", a " + type + " dog. \nThe top trick is : " +
                topTrick + ".";
        return temp;
    }
}
