
public class pet {
	String petType, petName;
	int petAge, dogSpace, catSpace, daysStay;
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
	public int getDogSpace() {
		return dogSpace;
	}
	public void setDogSpace(int dogSpace) {
		this.dogSpace = dogSpace;
	}
	public int getCatSpace() {
		return catSpace;
	}
	public void setCatSpace(int catSpace) {
		this.catSpace = catSpace;
	}
	public int getDaysStay() {
		return daysStay;
	}
	public void setDaysStay(int daysStay) {
		this.daysStay = daysStay;
	}
	public double getAmountDue() {
		return amountDue;
	}
	public void setAmountDue(double amountDue) {
		this.amountDue = amountDue;
	}
	
	public pet(String petType, String petName, int petAge, int dogSpace, int catSpace, int daysStay, double amountDue) {
		super();
		this.petType = petType;
		this.petName = petName;
		this.petAge = petAge;
		this.dogSpace = dogSpace;
		this.catSpace = catSpace;
		this.daysStay = daysStay;
		this.amountDue = amountDue;
	}
	
	public boolean checkIn(int days, String type) {
		if (type.toLowerCase() == "dog") {
			if (this.dogSpace > 0) {
				this.dogSpace--;
				return true;
			}
		} else if (type.toLowerCase() == "cat") {
			if (this.catSpace > 0) {
				this.catSpace--;
				return true;
			}
		}
		return false;
	}
	
	public void checkOut() {
		if (this.petType == "dog") {
			this.dogSpace++;
		} else if (this.petType == "cat") {
			this.catSpace++;
		}
	}
}
