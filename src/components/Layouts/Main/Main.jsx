import { PersonalDescription } from "../../UI/PersonalDescription/PersonalDescription"
import { Family } from "../../UI/Family/Family"
import { Studies } from "../../UI/Studies/Studies"

export const Main = () => {
	const randomImage = "https://media.discordapp.net/attachments/1204222012390641674/1234022823694045266/image.png?ex=670aba90&is=67096910&hm=a758031111156c21f097f755ea900f5817e7cf6b3e7fc2158a24bf44602565c5&=&format=webp&quality=lossless&width=195&height=262"
	return (
		<main>
			<PersonalDescription photo={randomImage}/>
			<hr/>
			<Family />
			<hr/>
			<Studies />
		</main>
	)
}