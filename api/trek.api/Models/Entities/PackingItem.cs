using System.ComponentModel.DataAnnotations;

namespace trek.api.Models.Entities
{
    public class PackingItem
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(100)]
        public string Name { get; set; }
        [Required]
        [MaxLength(100)]
        public string NeededBy { get; set; }
    }
}
