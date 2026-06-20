using NUnit.Framework;
using UtilLib;

namespace UtilLib.Tests
{
    public class UrlHostNameParserTests
    {
        [Test]
        public void ParseHostName_ValidHttpUrl_ReturnsHostName()
        {
            UrlHostNameParser parser = new UrlHostNameParser();


            string result = parser.ParseHostName("http://www.google.com/search");



            Assert.That(result, Is.EqualTo("www.google.com"));


        }

        [Test]
        public void ParseHostName_InvalidProtocol_ThrowsFormatException()
        {
            UrlHostNameParser parser = new UrlHostNameParser();


            Assert.That(() => parser.ParseHostName("ftp://www.google.com"), Throws.TypeOf<FormatException>());



        }


        [Test]
        public void ParseHostName_ValidHttpsUrl_ReturnsHostName()
        {
            UrlHostNameParser parser = new UrlHostNameParser();


            string result = parser.ParseHostName("https://www.microsoft.com/login");



            Assert.That(result, Is.EqualTo("www.microsoft.com"));


        }
    }
}