using System.Collections.Generic;
using System.Linq;

namespace ShakeToWin.Web.Models
{
	public class Playroom
	{
		public const int MaxPlayers = 5;

		private readonly Dictionary<int, ShakeReport> _lastReports;

		public Playroom(int id)
		{
			Id = id;
			_lastReports = new Dictionary<int, ShakeReport>();
		}

		public int Id { get; }

		public int[] Users => _lastReports.Keys.ToArray();

		public ShakeReport[] Reports => _lastReports.Values.ToArray();

		public bool IsFull => _lastReports.Count >= MaxPlayers;

		public void AddUser(int userId) =>
			_lastReports.Add(userId, new ShakeReport(Id, userId, 0));

		public void ReceiveReport(ShakeReport report) =>
			_lastReports[report.UserId] = report;
	}
}
