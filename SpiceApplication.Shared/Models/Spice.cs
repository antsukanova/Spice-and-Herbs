using System.ComponentModel.DataAnnotations;

namespace SpiceApplication.Shared.Models
{
    public class Spice
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Title { get; set; }
        [Required]
        public string ImageUrl { get; set; }
        public string Description { get; set; }
    }
}