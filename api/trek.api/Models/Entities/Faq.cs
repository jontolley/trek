using System.ComponentModel.DataAnnotations;

namespace trek.api.Models.Entities
{
    public class Faq
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(50)]
        public string Key { get; set; }
        [Required]
        [MaxLength(500)]
        public string Question { get; set; }
        [Required]
        public string Answer { get; set; }
    }
}
