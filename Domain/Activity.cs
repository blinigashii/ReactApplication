using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    #nullable disable
    public class Activity
    {
        
        public Guid Id { get; set; } 
        public string Title { get; set; } =null!;
        public DateTime Date { get; set; }
        public string Description { get; set; } =null!;
        public string Category { get; set; } =null!;
        public string  City { get; set; } =null!;
        public string Venue { get; set; } =null!;

    }
}