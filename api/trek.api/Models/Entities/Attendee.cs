using System;
using System.ComponentModel.DataAnnotations;

namespace trek.api.Models.Entities
{
    public class Attendee
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public bool IsAdult { get; set; }

        [Required]
        [MaxLength(100)]
        public string FirstName { get; set; }

        [Required]
        [MaxLength(100)]
        public string LastName { get; set; }

        [Required]
        [MaxLength(50)]
        public string Ward { get; set; }

        [Required]
        [MaxLength(10)]
        public string Gender { get; set; }

        public bool PeanutAllergy { get; set; }

        public bool GlutenAllergy { get; set; }

        public DateTime? DateOfBirth { get; set; }

        [MaxLength(100)]
        public string ParentName { get; set; }

        [MaxLength(100)]
        public string ParentEmail { get; set; }

        [MaxLength(15)]
        public string ParentPhone { get; set; }

        [Required]
        [MaxLength(100)]
        public string EmergencyName { get; set; }

        [Required]
        [MaxLength(15)]
        public string EmergencyPhone { get; set; }

        [Required]
        public DateTime RegisteredDateTime { get; set; }
    }
}
