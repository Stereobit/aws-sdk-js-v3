/**
 * <p>Represents the output of a test. Examples of artifacts include logs and screenshots.</p>
 */
export interface _Artifact {
  /**
   * <p>The artifact's ARN.</p>
   */
  arn?: string;

  /**
   * <p>The artifact's name.</p>
   */
  name?: string;

  /**
   * <p>The artifact's type.</p> <p>Allowed values include the following:</p> <ul> <li> <p>UNKNOWN: An unknown type.</p> </li> <li> <p>SCREENSHOT: The screenshot type.</p> </li> <li> <p>DEVICE_LOG: The device log type.</p> </li> <li> <p>MESSAGE_LOG: The message log type.</p> </li> <li> <p>VIDEO_LOG: The video log type.</p> </li> <li> <p>RESULT_LOG: The result log type.</p> </li> <li> <p>SERVICE_LOG: The service log type.</p> </li> <li> <p>WEBKIT_LOG: The web kit log type.</p> </li> <li> <p>INSTRUMENTATION_OUTPUT: The instrumentation type.</p> </li> <li> <p>EXERCISER_MONKEY_OUTPUT: For Android, the artifact (log) generated by an Android fuzz test.</p> </li> <li> <p>CALABASH_JSON_OUTPUT: The Calabash JSON output type.</p> </li> <li> <p>CALABASH_PRETTY_OUTPUT: The Calabash pretty output type.</p> </li> <li> <p>CALABASH_STANDARD_OUTPUT: The Calabash standard output type.</p> </li> <li> <p>CALABASH_JAVA_XML_OUTPUT: The Calabash Java XML output type.</p> </li> <li> <p>AUTOMATION_OUTPUT: The automation output type.</p> </li> <li> <p>APPIUM_SERVER_OUTPUT: The Appium server output type.</p> </li> <li> <p>APPIUM_JAVA_OUTPUT: The Appium Java output type.</p> </li> <li> <p>APPIUM_JAVA_XML_OUTPUT: The Appium Java XML output type.</p> </li> <li> <p>APPIUM_PYTHON_OUTPUT: The Appium Python output type.</p> </li> <li> <p>APPIUM_PYTHON_XML_OUTPUT: The Appium Python XML output type.</p> </li> <li> <p>EXPLORER_EVENT_LOG: The Explorer event log output type.</p> </li> <li> <p>EXPLORER_SUMMARY_LOG: The Explorer summary log output type.</p> </li> <li> <p>APPLICATION_CRASH_REPORT: The application crash report output type.</p> </li> <li> <p>XCTEST_LOG: The Xcode test output type.</p> </li> <li> <p>VIDEO: The Video output type.</p> </li> <li> <p>CUSTOMER_ARTIFACT:The Customer Artifact output type.</p> </li> <li> <p>CUSTOMER_ARTIFACT_LOG: The Customer Artifact Log output type.</p> </li> <li> <p>TESTSPEC_OUTPUT: The Test Spec Output type.</p> </li> </ul>
   */
  type?:
    | "UNKNOWN"
    | "SCREENSHOT"
    | "DEVICE_LOG"
    | "MESSAGE_LOG"
    | "VIDEO_LOG"
    | "RESULT_LOG"
    | "SERVICE_LOG"
    | "WEBKIT_LOG"
    | "INSTRUMENTATION_OUTPUT"
    | "EXERCISER_MONKEY_OUTPUT"
    | "CALABASH_JSON_OUTPUT"
    | "CALABASH_PRETTY_OUTPUT"
    | "CALABASH_STANDARD_OUTPUT"
    | "CALABASH_JAVA_XML_OUTPUT"
    | "AUTOMATION_OUTPUT"
    | "APPIUM_SERVER_OUTPUT"
    | "APPIUM_JAVA_OUTPUT"
    | "APPIUM_JAVA_XML_OUTPUT"
    | "APPIUM_PYTHON_OUTPUT"
    | "APPIUM_PYTHON_XML_OUTPUT"
    | "EXPLORER_EVENT_LOG"
    | "EXPLORER_SUMMARY_LOG"
    | "APPLICATION_CRASH_REPORT"
    | "XCTEST_LOG"
    | "VIDEO"
    | "CUSTOMER_ARTIFACT"
    | "CUSTOMER_ARTIFACT_LOG"
    | "TESTSPEC_OUTPUT"
    | string;

  /**
   * <p>The artifact's file extension.</p>
   */
  extension?: string;

  /**
   * <p>The pre-signed Amazon S3 URL that can be used with a corresponding GET request to download the artifact's file.</p>
   */
  url?: string;
}

export type _UnmarshalledArtifact = _Artifact;