
import { useQuery, gql } from "@apollo/client";
import styles from "../styles/Home.module.css";

const QUERY = gql`
  query PastLaunches {
    launchesPast(limit: 10) {
        mission_name
        launch_date_local
        launch_site {
        site_name_long
        }
    }
}
`;

export default function PastLaunches() {
    const {data, loading, error} = useQuery(QUERY);

    if (loading) {
        return (
            <h2>Loading Data...</h2>
        );
    };

    if (error) {
        console.error(error);
        return (
            <h2>Sorry, there&apos;s been an error...</h2>
        );
    };

    const {launchesPast} = data;

    return (
        <>
            {launchesPast.map((launch) => (
                <div key={launch.mission_name} className={styles.missionContainer}>
                    <p className={styles.description}>
                        <span>🚀 Mission name: <strong>{launch.mission_name}</strong></span>
                        <span>📅 Date: <strong>{launch.nextLaunchDate}</strong></span>
                        <span>🏠 Launched from: <strong>{launch.launch_site.site_name_long}</strong></span>
                    </p>
                </div>
            ))}
        </>
    )
}