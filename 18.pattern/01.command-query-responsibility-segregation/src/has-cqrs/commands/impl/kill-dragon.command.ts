// Defines a command class for killing a dragon with necessary details.
export class KillDragonCommand {
  constructor(
      public readonly heroId: string, // ID of the hero performing the action
      public readonly dragonId: string, // ID of the dragon to be killed
  ) {}
}
