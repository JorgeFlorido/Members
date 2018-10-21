using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Members.Models.EF;

namespace Members.Controllers
{
    public class MemberController : Controller
    {
        private readonly MembersDbContext db = null;

        public MemberController()
        {
            db = new MembersDbContext();
        }

        public JsonResult Index()
        {
            var members = db.Members.ToList();
            return Json(members, JsonRequestBehavior.AllowGet);
        }
    }
}