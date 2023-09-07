"""
Final Project Script Three Submission: ATM Script
Bradley Jackson
10/20/19

Annotations begin with "A.", "B.", or "C."
"""


class atm:
    def __init__(self, current_balance):
        self.active = True
        self.history = ["(" * " * 15)" + "\nTRANSACTION RECEIPT"]
        # Creates list of history which is appended with transaction details.
        try:
            self.account_balance = float(current_balance)
        except ValueError:
            print("Invalid balance.")
        else:
            self.startCli()

    def balance(self):
        """ Method
    A. Prints current balance.
    """
        self.history.append("GET BALANCE={:.2f}".format(self.account_balance))
        response = "Your current balance:\n{:.2f}.".format(self.account_balance)
        return response

    def deposit(self, val):
        """ Method
    A. Adds given amount to current balance.
    """
        val = float(val)
        self.account_balance = self.account_balance + val
        self.history.append(
            "PUT DEPOSIT={:.2f}, BALANCE={:.2f}".format(val, self.account_balance)
        )
        response = "Deposit was ${:.2f}, current balance is ${:.2f}.".format(
            val, self.account_balance
        )
        return response

    def withdraw(self, val):
        """ Method
    A. Removes given amount from current balance.
    """
        val = float(val)
        if val <= self.account_balance:
            self.account_balance = self.account_balance - val
            self.history.append(
                "PUT WITHDRAWAL={:.2f}, BALANCE={:.2f}".format(
                    val, self.account_balance
                )
            )
            response = "Withdrawal amount was ${:.2f}, current balance is ${:.2f}.".format(
                val, self.account_balance
            )
            return response
        else:
            self.history.append(
                "FAILED WITHDRAWAL={:.2f}, BALANCE={:.2f}".format(
                    val, self.account_balance
                )
            )
            response = "${:.2f} is greater than your account balance of ${:.2f}.".format(
                val, self.account_balance
            )
            return response

    def startCli(self):
        while self.active:
            userchoice = input(
                ("*" * 15)
                + "\nWhat would you like to do?\n(d)eposit\n(w)ithdrawal\n(b)alance\n(q)uit\n\n>> "
            )
            # B. Input - Determines if the user wants to check, deposit,
            # or withdraw from account.
            if userchoice.lower() == "d":
                deposit_amount = input("How much would you like to deposit today?\n>> ")
                # B. Input - Amount that user wants to deposit to their account.
                output = self.deposit(deposit_amount)
                print(output)
                # C. Calls the deposit() function which adds the value to the account.
            elif userchoice.lower() == "w":
                withdrawal_amount = input(
                    "How much would you like to withdraw today?\nCurrent balance is ${:.2f}.\n>> ".format(
                        self.account_balance
                    )
                )
                # B. Input - Amount that user wants to withdraw from their account.
                output = self.withdraw(withdrawal_amount)
                print(output)
                # C. Calls the withdraw function which prints the current balance after
                # the withdrawal is made or an error for insufficient funds.
            elif userchoice.lower() == "b":
                output = self.balance()
                print(output)
            elif userchoice.lower() == "q":
                print("Thank you for banking with us.")
                for entry in self.history:
                    print(entry)
                self.active = False
                return 0


if __name__ == "__main__":
    account_balance = 500.24
    a = atm(account_balance)
    # Call class atm and assign object to variable a
