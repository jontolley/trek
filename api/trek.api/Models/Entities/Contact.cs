using System;
using System.ComponentModel.DataAnnotations;

namespace trek.api.Models.Entities
{
    public class Contact
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string Email { get; set; }

        [Required]
        [MaxLength(100)]
        public string Name { get; set; }

        [Required]
        [MaxLength(2000)]
        public string Message { get; set; }

        [MaxLength(100)]
        public string Ward { get; set; }

        [Required]
        public DateTime ReceivedDateTime { get; set; }
    }
}
