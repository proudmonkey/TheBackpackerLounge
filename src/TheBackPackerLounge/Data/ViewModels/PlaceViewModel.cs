using System;
using Newtonsoft.Json;

namespace TheBackPackerLounge.Data.ViewModels
{
    [JsonObject(MemberSerialization.OptOut)]
    public class PlaceViewModel
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        [JsonIgnore]
        public int ViewCount { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime LastModifiedDate { get; set; }
    }
}
