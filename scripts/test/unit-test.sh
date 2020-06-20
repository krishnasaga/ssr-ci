#!bash
export JEST_JUNIT_OUTPUT_DIR="test-reports"
jest  src --reporters="default" --reporters="jest-junit"
