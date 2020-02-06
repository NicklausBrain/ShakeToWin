using System;

namespace ShakeToWin.Web.Data
{
	public class IdGenerator
	{
		private readonly Random _random;

		public IdGenerator()
		{
			_random = new Random(Environment.TickCount);
		}

		public int Generate() => _random.Next(0, int.MaxValue);
	}
}
