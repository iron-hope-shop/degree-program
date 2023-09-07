import java.util.InputMismatchException;
import java.util.Scanner;

public class Paint1 {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        double wallHeight = 0.0;
        double wallWidth = 0.0;
        double wallArea = 0.0;
        double gallonsPaintNeeded = 0.0;
        
        final double squareFeetPerGallons = 350.0;
        
        // Implement a do-while loop to ensure input is valid
        // Prompt user to input wall's height
        System.out.println("Enter wall height (feet): ");
        do {
            try {
                wallHeight = scnr.nextDouble();
                if (wallHeight == 0) {
                    System.out.println("You entered an invalid wall height.");
                    System.out.println("Enter wall height (feet): ");
                    continue;
                }
            } catch (InputMismatchException e) {
                // clear input buffer token and prompt again upon invalid input
                scnr.next();
                System.out.println("You entered an invalid wall height.");
                System.out.println("Enter wall height (feet): ");
            }
        } while (wallHeight == 0.0d || wallHeight == 0);

        // Implement a do-while loop to ensure input is valid
        // Prompt user to input wall's width
        System.out.println("Enter wall width (feet): ");
        do {
            try {
                wallWidth = scnr.nextDouble();
                if (wallWidth == 0) {
                    System.out.println("You entered an invalid wall width.");
                    System.out.println("Enter wall width (feet): ");
                    continue;
                }
            } catch (InputMismatchException e) {
                // clear input buffer token and prompt again upon invalid input
                scnr.next();
                System.out.println("You entered an invalid wall width.");
                System.out.println("Enter wall width (feet): ");
            }
        } while (wallWidth == 0.0d || wallWidth == 0);

        // Calculate and output wall area
        wallArea = wallHeight * wallWidth;
        System.out.println("Wall area: " + wallArea + " square feet");

        // Calculate and output the amount of paint (in gallons) needed to paint the wall
        gallonsPaintNeeded = wallArea/squareFeetPerGallons;
        System.out.println("Paint needed: " + gallonsPaintNeeded + " gallons");

    }
}
