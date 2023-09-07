

public class Driver {

    public static void main(String[] args) {

        // Instance variables
        String animalType, customerCountry;
        animalType = "Monkey";
        customerCountry = "US";

        // Create New Dog
        Dog dogObject = new Dog();
        dogObject.setSpecies("Long-haired Chihuahua");
        dogObject.setType("Dog");
        dogObject.setInServiceCountry("GB");
        dogObject.setReserved(false);

        // Create New Monkey
        Monkey monkeyObject new Monkey();
        monkeyObject.setSpecies("Squirrel monkey");
        monkeyObject.setType("Monkey");
        monkeyObject.setInServiceCountry("US");
        monkeyObject.setReserved(false);


        // Create array of animals
        RescueAnimal[] animals = {monkeyObject, dogObject};

        // Method to process request for a rescue animal
        /*
            TODO
            load animals from database and store them in
            list object so that we may iterate through all
            known animals
        */
        public void processRequest() {
            for (int i = 0; i < animals.length; i++) {
                if (animals[i].getInServiceCountry() == customerCountry && animals[i].getType() == animalType && !animals[i].getReserved()) {
                    animals[i].setReserved(true);
                    // processAnimalPlacement(animals[i]);
                    System.out.println("Animal reserved!")
                }
            }
        }

        // Method(s) to update information on existing animals
        // both classes have mutator methods but here is an example
        public void cancelMonkeyReservation() {
            monkeyObject.setReserved(false);
        }
        

        // Method to display matrix of animals based on location and status/training phase
        public void displayAvailableAnimals(String loc, String status) {
            for (int i = 0; i < animals.length; i++) {
                if (animals[i].getInServiceCountry() == loc && animals[i].getTrainingStatus() == status) {
                    animals[i].toString()
                }
            }
        }


        // Method to add animals

        public void addAnimal(String type, String name) {
            if (type == "Monkey") {
                Monkey name new Monkey();
                name.setName(name);
            } else if ( type == "Dog") {
                Dog name new Dog();
                name.setName(name);
            } else {
                System.out.println("Animal type not supported.")
            }
        }

        // Method to out process animals for the farm or in-service placement
        public void processAnimalPlacement(RescueAnimal animal) {
            if (!animal.getInServiceCountry()) {
                animal.setInServiceCountry = "";
                animal.setInServiceCity = "";
                animal.setInServiceAgency = "";
                animal.setInServicePOC = "";
                animal.setInServiceEmail = "";
                animal.setInServicePhone = "";
                animal.setInServicePostalAddress = "";
                //  TODO refactor this
            }
        }


        // Method to display in-service animals
        public void displayInServiceAnimals() {
            for (int i = 0; i < animals.length; i++) {
                // if animal is not in service it will not have an inServiceCountry
                if (animals[i].getInServiceCountry()) {
                    animals[i].toString()
                }
            }
        }


        // Process reports from in-service agencies reporting death/retirement
        public void deathReport() {
            for (int i = 0; i < animals.length; i++) {
                if (animals[i].getTrainingStatus() == "retired" || animals[i].getTrainingStatus() == "dead") {
                    animals[i].toString()
                }
            }
        }
    }
}
