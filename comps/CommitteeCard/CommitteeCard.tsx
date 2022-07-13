import type { CommitteeCardType } from '../../global/types';
import styles from './CommitteeCard.module.scss'

function OrganizerCard(props: CommitteeCardType) {

    const { imageUrl, person, affiliation, socialLink } = props;

    return (
        <a href={socialLink}>
            <div className={styles.CCWrapper}>
                <figure className={styles.CCImage}>
                    <img src={imageUrl} alt="image" />
                </figure>
                <span className={styles.CCName}>{person}</span>
                <span className={styles.CCAffiliation}>{affiliation}</span>

            </div>
        </a>
    )
}

export default OrganizerCard