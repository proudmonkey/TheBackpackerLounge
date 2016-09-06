using System;
using Newtonsoft.Json;

namespace TheBackPackerLounge.Data.ViewModels
{
    [JsonObject(MemberSerialization.OptOut)]
    public class LoungeViewModel
    {
        public int ID { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }
        [JsonIgnore]
        public int ViewCount { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime LastModifiedDate { get; set; }
    }
}
