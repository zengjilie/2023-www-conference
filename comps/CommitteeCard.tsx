import type { CommitteeCardType } from '../global/types';
import Image from 'next/image';

function OrganizerCard(props: CommitteeCardType) {

    const { imageUrl, person, affiliation, socialLink } = props;

    return (
        <a href={socialLink}>
            <div className="committee-card-wrapper">
                <figure className="committee-card-image">
                    <img src={imageUrl} alt="image" />
                    {/* <Image
                        src={imageUrl}
                        width="100%"
                        height="100%"
                    /> */}
                </figure>
                <span className="committee-card-name">{person}</span>
                <span className="committee-card-affiliation">{affiliation}</span>

            </div>
        </a>
    )
}

export default OrganizerCard