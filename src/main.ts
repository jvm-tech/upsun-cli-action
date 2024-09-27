import * as core from '@actions/core'
import * as exec from '@actions/exec'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const token = core.getInput('token')

    await exec.exec(
      ` bash -c "curl https://raw.githubusercontent.com/platformsh/cli/main/installer.sh | sudo VENDOR=upsun INSTALL_METHOD=raw bash"`
    )
    core.exportVariable('UPSUN_CLI_TOKEN', token)
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
