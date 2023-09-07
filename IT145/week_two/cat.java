/*
 *                           _                  
 *                _         | |                 
 *   ____ _____ _| |_   ____| | _____  ___  ___ 
 *  / ___|____ (_   _) / ___) |(____ |/___)/___)
 * ( (___/ ___ | | |_ ( (___| |/ ___ |___ |___ |
 *  \____)_____|  \__|_)____)\_)_____(___/(___/ 
 *                                              
 * @author Brad Jackson
 * @description Cat class based on UML diagram provided in Project One.
 * 
 */

public class cat {
	String petType, petName;
	int petAge, daysStay, catSpaceNbr;
	boolean dogSpace, catSpace;
	double amountDue;
	
	public String getPetType() {
		return petType;
	}
	public void setPetType(String petType) {
		this.petType = petType;
	}
	public String getPetName() {
		return petName;
	}
	public void setPetName(String petName) {
		this.petName = petName;
	}
	public int getPetAge() {
		return petAge;
	}
	public void setPetAge(int petAge) {
		this.petAge = petAge;
	}
	public int getDaysStay() {
		return daysStay;
	}
	public void setDaysStay(int daysStay) {
		this.daysStay = daysStay;
	}
	public int getCatSpaceNbr() {
		return catSpaceNbr;
	}
	public void setCatSpaceNbr(int catSpaceNbr) {
		this.catSpaceNbr = catSpaceNbr;
	}
	public boolean isDogSpace() {
		return dogSpace;
	}
	public void setDogSpace(boolean dogSpace) {
		this.dogSpace = dogSpace;
	}
	public boolean isCatSpace() {
		return catSpace;
	}
	public void setCatSpace(boolean catSpace) {
		this.catSpace = catSpace;
	}
	public double getAmountDue() {
		return amountDue;
	}
	public void setAmountDue(double amountDue) {
		this.amountDue = amountDue;
	}
	public cat(String petType, String petName, int petAge, int daysStay, int catSpaceNbr, boolean dogSpace,
			boolean catSpace, double amountDue) {
		super();
		this.petType = petType;
		this.petName = petName;
		this.petAge = petAge;
		this.daysStay = daysStay;
		this.catSpaceNbr = catSpaceNbr;
		this.dogSpace = dogSpace;
		this.catSpace = catSpace;
		this.amountDue = amountDue;
	}
}

