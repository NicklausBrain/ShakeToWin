using System.Collections.Generic;
using System.Linq;
using ShakeToWin.Web.Models;

namespace ShakeToWin.Web.Data
{
	public class PlayroomsRepository
	{
		private static readonly Dictionary<int, Playroom> Playrooms =
			new Dictionary<int, Playroom>();

		private readonly IdGenerator _idGenerator;

		private readonly object _lock = new object();

		public PlayroomsRepository(IdGenerator idGenerator)
		{
			_idGenerator = idGenerator;
		}

		public Connection ConnectUser()
		{
			lock (_lock)
			{
				var userId = _idGenerator.Generate();
				var spareRoom = Playrooms.FirstOrDefault(p => !p.Value.IsFull);
				var availableRoom = spareRoom.Value ?? new Playroom(_idGenerator.Generate());
				availableRoom.AddUser(userId);
				Playrooms.TryAdd(availableRoom.Id, availableRoom);
				return new Connection(userId, availableRoom);
			}
		}

		public Playroom GetById(int id) =>
			Playrooms.ContainsKey(id)
				? Playrooms[id]
				: null;
	}
}
