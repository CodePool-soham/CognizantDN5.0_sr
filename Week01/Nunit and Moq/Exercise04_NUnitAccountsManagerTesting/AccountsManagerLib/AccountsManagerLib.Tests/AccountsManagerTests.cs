using NUnit.Framework;
using AccountsManagerLib;

namespace AccountsManagerLib.Tests
{
    public class AccountsManagerTests
    {
        [Test]
        public void ValidateUser_ValidUser11Credentials_ReturnsWelcomeMessage()
        {
            AccountsManager manager = new AccountsManager();


            string result = manager.ValidateUser("user_11", "secret@user11");




            Assert.That(result, Is.EqualTo("Welcome user_11!!!"));

        }

        [Test]
        public void ValidateUser_ValidUser22Credentials_ReturnsWelcomeMessage()
        {
            AccountsManager manager = new AccountsManager();


            string result = manager.ValidateUser("user_22", "secret@user22");




            Assert.That(result, Is.EqualTo("Welcome user_22!!!"));

        }

        [Test]
        public void ValidateUser_InvalidCredentials_ReturnsInvalidUserMessage()
        {
            AccountsManager manager = new AccountsManager();


                    
            string result = manager.ValidateUser("user_99", "wrongpassword");



            Assert.That(result, Is.EqualTo("Invalid user id/password"));



        }

        [Test]
        public void ValidateUser_EmptyUserId_ThrowsFormatException()
        {
            AccountsManager manager = new AccountsManager();


            Assert.That(
                () => manager.ValidateUser(
                    "",
                    "secret@user11"),
                Throws.TypeOf<FormatException>());
        }

        [Test]
        public void ValidateUser_EmptyPassword_ThrowsFormatException()
        {
            AccountsManager manager = new AccountsManager();


            Assert.That(
                () => manager.ValidateUser(
                    "user_11",
                    ""),
                Throws.TypeOf<FormatException>());
        }




    }
}