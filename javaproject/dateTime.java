import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;

public class dateTime {
    public static void main(String[] args) {
        String ipDt = "2023-08-08T19:51:10";
        LocalDateTime inputDateTime = LocalDateTime.parse(ipDt);

        // get the zone id of GMT/UTC
        ZoneId UTCZoneId = ZoneId.of("GMT");

        // get the zone id of AEST/AEDT
        ZoneId AUZoneId = ZoneId.of("Australia/Sydney");

        //setting the input time zone to UTC zone
        ZonedDateTime ipdt_utc = inputDateTime.atZone(UTCZoneId);
        System.out.println(ipdt_utc);

        //converting input date time from UTC zone to equivalent AUS time
        ZonedDateTime ipdt_aus = ipdt_utc.withZoneSameInstant(AUZoneId);
        System.out.println(ipdt_aus);
    }
}
