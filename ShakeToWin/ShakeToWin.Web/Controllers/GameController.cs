using Microsoft.AspNetCore.Mvc;
using ShakeToWin.Web.Data;
using ShakeToWin.Web.Models;

namespace ShakeToWin.Web.Controllers
{
	public class GameController : ControllerBase
	{
		private readonly PlayroomsRepository _playrooms;

		public GameController(PlayroomsRepository playrooms)
		{
			_playrooms = playrooms;
		}

		[HttpPost("game/connect")]
		public Connection Connect()
		{
			var connection = _playrooms.ConnectUser();

			return connection;
		}

		[HttpGet("game/room/{id}")]
		public ActionResult<Playroom> GetRoom(int id)
		{
			var playroom = _playrooms.GetById(id);

			if (playroom != null)
			{
				return playroom;
			}

			return NotFound();
		}

		[HttpPost("game/report")]
		public IActionResult PostReport([FromBody]ShakeReport report)
		{
			var playroom = _playrooms.GetById(report.RoomId);

			playroom.ReceiveReport(report);

			return Accepted();
		}
	}
}
