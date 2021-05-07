using HajosTeszt.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HajosTeszt.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        [HttpGet]
        [Route("questions/count")]
        public int M1()
        {
            HajostesztContext context = new HajostesztContext();
            int KérdésekSzáma = context.Questions.Count();
            return KérdésekSzáma;
        }

        [HttpGet]
        [Route("questions/{sorszám}")]
        public ActionResult M2(int sorszám)
        {
            HajostesztContext context = new HajostesztContext();
            var kerdes = (from x in context.Questions where x.QuestionId == sorszám select x).FirstOrDefault();
            if (kerdes == null) return BadRequest("Nincs ilyen kérdés");

            return new JsonResult(kerdes);
        }
    }
}
