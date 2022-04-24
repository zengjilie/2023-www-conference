import type { OrganizerType } from '../global/types';
import styles from '../styles/OrganizerCard.module.scss';
import Image from 'next/image';

function OrganizerCard(props: OrganizerType) {

    const { image, person, affiliation, socialLink } = props;

    return (
        <a href={socialLink}>
            <div className={styles.OrgWrapper}>
                <figure className={styles.OrgImage}>
                    <img src={image} alt="image" />
                </figure>
                <span className={styles.OrgName}>{person}</span>
                <span className={styles.OrgAffiliation}>{affiliation}</span>
            </div>
        </a>
    )
}

export default OrganizerCard