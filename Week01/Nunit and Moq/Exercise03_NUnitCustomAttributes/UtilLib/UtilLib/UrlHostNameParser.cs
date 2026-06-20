using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace UtilLib
{
    public class UrlHostNameParser
    {
        public string ParseHostName(string url)
        {
            string protocol = url.Split(':')[0];

            if (protocol.Equals("http")|| protocol.Equals("https"))
            {
                string hostName = url.Split(':')[1].Substring(2).Split('/')[0];

                
                return hostName;
                /*Breaking the application(lab requirement) to show test cases working as expected by uncommenting
                the below line and commenting the above line*/

                //return "BrokenHost"; 

            }
            else
            {
                throw new FormatException("Url is not in correct format");
            }
        }
    }
}
