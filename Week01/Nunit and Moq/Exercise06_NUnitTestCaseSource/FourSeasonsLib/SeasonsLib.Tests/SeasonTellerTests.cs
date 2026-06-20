using NUnit.Framework;
using SeasonsLib;
using System.Collections;

namespace SeasonsLib.Tests
{
    public class SeasonTellerTests
    {
        public static IEnumerable SeasonData
        {
            get
            {
                yield return new TestCaseData("February", "Spring");
                yield return new TestCaseData("March", "Spring");

                yield return new TestCaseData("April", "Summer");
                yield return new TestCaseData("May", "Summer");
                yield return new TestCaseData("June", "Summer");

                yield return new TestCaseData("July", "Monsoon");
                yield return new TestCaseData("August", "Monsoon");
                yield return new TestCaseData("September", "Monsoon");

                yield return new TestCaseData("October", "Autumn");
                yield return new TestCaseData("November", "Autumn");

                yield return new TestCaseData("December", "Winter");
                yield return new TestCaseData("January", "Winter");

                yield return new TestCaseData("Batman", "Invalid Season");
            }
        }

        [TestCaseSource(nameof(SeasonData))]
        public void DisplaySeasonBy_ValidMonth_ReturnsExpectedSeason(
            string month,
            string expected)
        {
            SeasonTeller teller =
                new SeasonTeller();

            string actual =
                teller.DisplaySeasonBy(month);

            Assert.That(
                actual,
                Is.EqualTo(expected));
        }



        public static object[] AlternateSeasonData =
        {
            new object[] { "February", "Spring" },
            new object[] { "April", "Summer" },
            new object[] { "July", "Monsoon" },
            new object[] { "October", "Autumn" },
            new object[] { "December", "Winter" },
            new object[] { "XYZ", "Invalid Season" }
        };



        [TestCaseSource(nameof(AlternateSeasonData))]
        public void DisplaySeasonBy_AlternateTestCaseSource_ReturnsExpectedSeason(string month, string expected)

        {
            SeasonTeller teller = new SeasonTeller();

            string actual =
                teller.DisplaySeasonBy(month);

            Assert.That(actual, Is.EqualTo(expected));


        }
    }
}