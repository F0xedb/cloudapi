using System;

namespace history.model
{
    public class historymodel
    {
        public string url { get; set; }
        public string name { get; set; }
        public long id { get; set; }

        public historymodel(string name, string url)
        {
            this.url = url;
            this.name = name;
        }

    }
}
