import { _SupportedPlatformsList } from "./_SupportedPlatformsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AvailabilityZone: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    SupportedPlatforms: {
      shape: _SupportedPlatformsList
    }
  }
};