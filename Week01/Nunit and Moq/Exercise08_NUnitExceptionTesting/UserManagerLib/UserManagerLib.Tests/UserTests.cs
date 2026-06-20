using NUnit.Framework;
using UserManagerLib;

namespace UserManagerLib.Tests
{
    public class UserTests
    {
        [Test]
        public void CreateUser_ValidPANCard_DoesNotThrowException()
        {
            User userManager = new User();

            User user = new User
            {
                PANCardNo = "ABCDE1234F"
            };

            Assert.That(
                () => userManager.CreateUser(user),
                Throws.Nothing);
        }

        [Test]
        public void CreateUser_NullPANCard_ThrowsNullReferenceException()
        {
            User userManager = new User();

            User user = new User
            {
                PANCardNo = null
            };

            Assert.That(
                () => userManager.CreateUser(user),
                Throws.TypeOf<NullReferenceException>());
        }

        [Test]
        public void CreateUser_InvalidPANLength_ThrowsFormatException()
        {
            User userManager = new User();

            User user = new User
            {
                PANCardNo = "ABC123"
            };

            Assert.That(
                () => userManager.CreateUser(user),
                Throws.TypeOf<FormatException>());
        }
    }
}