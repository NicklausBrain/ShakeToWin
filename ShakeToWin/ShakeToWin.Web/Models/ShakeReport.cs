using System;
using Newtonsoft.Json;

namespace ShakeToWin.Web.Models
{
	public class ShakeReport
	{
		[JsonConstructor]
		public ShakeReport(
			int roomId,
			int userId,
			int accelerationId)
		{
			RoomId = roomId;
			UserId = userId;
			AccelerationId = accelerationId;
			Timestamp = DateTimeOffset.Now;
		}

		public int RoomId { get; }

		public int UserId { get; }

		public int AccelerationId { get; }

		public DateTimeOffset Timestamp { get; }
	}
}
