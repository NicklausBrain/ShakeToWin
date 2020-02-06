namespace ShakeToWin.Web.Models
{
	public class Connection
	{
		public Connection(
			int userId,
			Playroom playroom)
		{
			UserId = userId;
			Playroom = playroom;
		}

		public int UserId { get; }

		public Playroom Playroom { get; }
	}
}
