import Video from '../components/Video';
import '../assets/scss/components/Home.scss';

export default function Home() {
    const homeText = (
        <>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Per commodo mi tempus, litora nam sollicitudin. Blandit penatibus mauris eleifend viverra, ligula fusce. Feugiat sit volutpat vitae vestibulum primis. Vel viverra urna hendrerit porta ipsum. Libero netus leo dolor non a. Donec pharetra class montes fames porttitor; leo dis condimentum?

Et finibus lacinia diam hac vestibulum. Diam elementum mus elementum phasellus malesuada. Consequat massa quis orci etiam suscipit natoque. Mollis praesent potenti nibh sem rhoncus molestie dui dui fames. Integer tincidunt auctor a; magna vestibulum cursus. Nam pellentesque elementum mus elit ante habitasse hendrerit. Fusce lobortis venenatis tristique arcu semper nascetur.

Conubia rutrum conubia vestibulum conubia pellentesque blandit cursus ante. Senectus duis penatibus aptent et molestie sem adipiscing molestie. Montes magna odio lobortis torquent ultricies porttitor aenean lectus. Ligula purus commodo semper primis dis sapien natoque dolor lobortis. Vulputate tristique faucibus gravida dis eleifend libero nullam. Et netus volutpat dictum; parturient ac praesent viverra nunc metus. Augue consectetur congue sed consectetur pellentesque suscipit leo. Himenaeos elementum parturient per quisque varius curae per. Inceptos vestibulum lacinia sollicitudin torquent vitae velit. Accumsan enim nascetur orci tempus consequat venenatis donec sollicitudin.

Mi magnis dignissim gravida facilisi cubilia elementum enim justo suscipit. Odio netus efficitur natoque montes hendrerit purus suscipit etiam. Class facilisis tempor elementum; interdum adipiscing netus. Ut accumsan dis; primis eleifend ad felis. Ornare natoque sed ad convallis libero justo. Lobortis venenatis est praesent, magnis porta penatibus natoque nunc. Montes sed auctor at curabitur odio. Justo hendrerit scelerisque vehicula quis sagittis ornare felis. Consectetur egestas a aliquet ex semper.

Curae parturient sagittis urna vivamus nascetur. Est bibendum aliquet class cursus interdum accumsan. Mauris lacinia elit odio at suscipit taciti. Tortor malesuada scelerisque nascetur class dignissim venenatis proin aptent. Tristique vel pellentesque torquent, egestas vestibulum torquent. Auctor dolor praesent lorem class posuere litora laoreet. Primis habitant condimentum nulla taciti sem. Class ut elementum curabitur consectetur dictum; sit egestas. Venenatis justo hendrerit senectus non sem.
        </>
    )

    return (
        <div className="container home">
            <Video />
            <p className='home-text'>{homeText}</p>
        </div>

    )
}