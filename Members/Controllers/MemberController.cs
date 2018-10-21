using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;
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

        public JsonResult Details(int id)
        {
            var member = db.Members.Find(id);
            return Json(member, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Create(Member member)
        {
            db.Members.Add(member);
            db.SaveChanges();
            return Json(null);
        }

        [HttpPost]
        public JsonResult Edit(Member member)
        {
            db.Entry(member).State = EntityState.Modified;
            db.SaveChanges();
            return Json(null);
        }

        [HttpPost]
        public JsonResult Delete(int id)
        {
            var member = db.Members.Find(id);
            db.Members.Remove(member);
            db.SaveChanges();
            return Json(null);
        }
    }
}