import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { Team } from 'src/teams/entities/team.entity';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';
import { PlayersService } from './players.service';

@Resolver(() => Player)
export class PlayersResolver {
  constructor(private playersService: PlayersService) {}

  @Mutation((returns) => Player)
  create(@Args('createPlayerInput') createPlayerInput: CreatePlayerDto) {
    return this.playersService.create(createPlayerInput);
  }

  @Query(() => [Player], { name: 'players' })
  async findAll() {
    return this.playersService.findAll();
  }

  @Query(() => Player, { name: 'player' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.playersService.findOne(id);
  }

  @ResolveField((returns) => Team)
  team(@Parent() player: Player): Promise<Team> {
    return this.playersService.getTeam(player.teamId);
  }

  @Mutation(() => Player)
  update(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') updatePlayerDto: UpdatePlayerDto,
  ) {
    return this.playersService.update(id, updatePlayerDto);
  }

  @Mutation((returns) => Boolean)
  remove(@Args('id', { type: () => Int }) id: number) {
    return this.playersService.remove(id);
  }
}
