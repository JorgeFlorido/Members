using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace Members.Models.EF
{
    public class MembersDbContext : DbContext
    {
        public MembersDbContext():base("name = MembersDbContext")
        {
            
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Member> Members { get; set; }
    }
}